import { resolve } from 'path';
import { promises as fsPromises } from 'fs';
import { safeLoad } from 'js-yaml';
import { IYaml } from '../interfaces/yaml.interface';

const jsonConfig = async () => {
  try {
    const pathFile = resolve(process.cwd(), 'config.yml');
    const readYaml = await fsPromises.readFile(pathFile, 'utf8');
    const config = safeLoad(readYaml, { json: true }) as IYaml;
    if (!config.services) {
      throw new Error();
    }
    return setSettings(config);
  } catch (error) {
    throw new Error(
      'Check if there is a config.yml file and if there is a configuration of the services',
    );
  }
};

const setSettings = ({
  nameApplication,
  hostApplication,
  config,
  security,
  services,
}: IYaml): IYaml => {
  const setName = () => {
    if (nameApplication) {
      return nameApplication;
    }
    return process.env.npm_package_name || '';
  };

  const setBoolean = (parentProperty: any, property: string) => {
    if (parentProperty === undefined || parentProperty === null) {
      return true;
    }

    if (
      parentProperty[property] === undefined ||
      parentProperty[property] === null
    ) {
      return true;
    }

    return parentProperty[property];
  };

  return {
    nameApplication: setName(),
    hostApplication: hostApplication || '',
    config: {
      enabledMorgan: setBoolean(config, 'enabledMorgan'),
      port: (config && config.port) || 3333,
    },
    security: {
      enabledHelmet: setBoolean(security, 'enabledHelmet'),
      enabledJSON: setBoolean(security, 'enabledJSON'),
    },
    services,
  };
};

export { jsonConfig };
