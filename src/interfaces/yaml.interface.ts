interface Config {
  port: number;
  enabledMorgan: boolean;
}

interface Security {
  enabledJSON: boolean;
  enabledHelmet: boolean;
}

interface Services {
  nameRoute: string;
  url: string;
}

export interface IYaml {
  nameApplication: string;
  hostApplication: string;
  config: Config;
  security: Security;
  services: Services[];
}
