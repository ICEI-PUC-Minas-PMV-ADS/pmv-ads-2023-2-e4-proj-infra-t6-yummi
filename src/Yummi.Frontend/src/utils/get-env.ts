const env = {
  API_URL: import.meta.env.VITE_API_URL
};

export const getEnv = (envName: keyof typeof env) => {
  const envValue = env[envName];

  if (!envValue) {
    throw new Error(`Environment variable ${envName} not found`);
  }

  return envValue;
};
