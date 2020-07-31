export default async (): Promise<void> => {
  process.env.NODE_ICU_DATA = 'node_modules/full-icu';
  process.env.TZ = 'utc';
};
