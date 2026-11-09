import dbConnect from '@/lib/mongodb';
import Setting from '@/models/Setting';
import { defaultSettings, normalizeSiteName, sanitizeBrandText } from '@/lib/seedData';

export async function getServerSettings() {
  try {
    const conn = await dbConnect();
    let settings = { ...defaultSettings };
    if (conn) {
      const dbSettings = await Setting.find({}).lean();
      dbSettings.forEach((s) => {
        settings[s.key] = s.value;
      });

      const normalizedName = normalizeSiteName(settings.site_name);
      if (settings.site_name !== normalizedName) {
        settings.site_name = normalizedName;
        Setting.findOneAndUpdate(
          { key: 'site_name' },
          { key: 'site_name', value: normalizedName },
          { upsert: true }
        ).catch(() => {});
      }
      if (settings.site_title) {
        settings.site_title = sanitizeBrandText(settings.site_title, settings.site_name);
      }
      if (settings.site_tagline) {
        settings.site_tagline = sanitizeBrandText(settings.site_tagline, settings.site_name);
      }
    }
    return settings;
  } catch (e) {
    return { ...defaultSettings };
  }
}
