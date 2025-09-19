export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_CLOUD_NAME"),
        api_key: env("CLOUDINARY_API_KEY"),
        api_secret: env("CLOUDINARY_API_SECRET"),
      },
      actionOptions: {
        upload: (file: { mime: string }) => {
          if (file.mime === "application/pdf") {
            return {
              resource_type: "raw" as const,
              folder: "becare",
              use_filename: true,
              unique_filename: false,
            };
          }

          return {
            resource_type: "auto" as const,
            folder: "becare",
            use_filename: true,
            unique_filename: false,
          };
        },
        delete: {},
      },
    },
  },
});
