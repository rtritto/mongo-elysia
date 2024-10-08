import fs from 'node:fs'

// Accessing Bluemix variable to get MongoDB info

// function getBlueMixConfig()  {
//   const dbLabel = 'mongodb-2.4'
//   const env = JSON.parse(process.env.VCAP_SERVICES)
//   if (env[dbLabel]) {
//     return env[dbLabel][0].credentials
//   }
// }

const getMongo = () => /* process.env.VCAP_SERVICES ? getBlueMixConfig() : */({
  // Setting the connection string will only give access to that database
  // to see more databases you need to set mongodb.admin to true
  // As recommended, a connection String is used instead of the individual params.
  connectionString: process.env.ME_CONFIG_MONGODB_URL,
  ssl: false
})

function getFile(filePath: string | undefined) {
  if (filePath !== undefined && filePath) {
    try {
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath)
      }
    } catch (error) {
      console.error('Failed to read file', filePath, error)
    }
  }
  return null
}

function getFileEnv(envVariable: string) {
  const origVar = process.env[envVariable]
  const fileVar = process.env[envVariable + '_FILE']
  if (fileVar) {
    const file = getFile(fileVar)
    if (file) {
      return file.toString().split(/\r?\n/)[0].trim()
    }
  }
  return origVar
}

function getBoolean(str: string | undefined, defaultValue = false) {
  return str ? str.toLowerCase() === 'true' : defaultValue
}

const getMongoDB = () => {
  const mongo = getMongo()
  return {
    // if a connection string options such as server/port/etc are ignored
    connectionString: mongo.connectionString,

    /** @type {import('mongodb').MongoClientOptions} */
    connectionOptions: {
      // ssl: connect to the server using secure SSL
      ssl: getBoolean(process.env.ME_CONFIG_MONGODB_SSL, mongo.ssl),

      // sslCA: single PEM file on disk
      sslCA: process.env.ME_CONFIG_MONGODB_CA_FILE,

      // maxPoolSize: size of connection pool (number of connections to use)
      maxPoolSize: 4
    },

    // set admin to true if you want to turn on admin features
    // if admin is true, the auth list below will be ignored
    // if admin is true, you will need to enter an admin username/password below (if it is needed)
    admin: getBoolean(process.env.ME_CONFIG_MONGODB_ENABLE_ADMIN, false),

    // whitelist: hide all databases except the ones in this list  (empty list for no whitelist)
    whitelist: [],

    // blacklist: hide databases listed in the blacklist (empty list for no blacklist)
    blacklist: []
  }
}

const getConfigDefault = () => ({
  mongodb: getMongoDB(),

  site: {
    // baseUrl: the URL that mongo express will be located at - Remember to add the forward slash at the start and end!
    baseUrl: process.env.ME_CONFIG_SITE_BASEURL || '/',
    cookieKeyName: 'mongo-express',
    cookieSecret: process.env.ME_CONFIG_SITE_COOKIESECRET,
    host: process.env.VCAP_APP_HOST || 'localhost',
    port: process.env.PORT || 8081,
    requestSizeLimit: process.env.ME_CONFIG_REQUEST_SIZE || '50mb',
    sessionSecret: process.env.ME_CONFIG_SITE_SESSIONSECRET,
    sslCert: process.env.ME_CONFIG_SITE_SSL_CRT_PATH || '',
    sslEnabled: getBoolean(process.env.ME_CONFIG_SITE_SSL_ENABLED, false),
    sslKey: process.env.ME_CONFIG_SITE_SSL_KEY_PATH || ''
  },

  healthCheck: {
    // path: the Path that mongo express healthcheck will be serve - Remember to add the forward slash at the start!
    path: process.env.ME_CONFIG_HEALTH_CHECK_PATH || '/status'
  },

  // set useBasicAuth to true if you want to authenticate mongo-express logins
  // if admin is false, the basicAuthInfo list below will be ignored
  // this will be false unless ME_CONFIG_BASICAUTH is set to the true
  useBasicAuth: getBoolean(getFileEnv('ME_CONFIG_BASICAUTH')),

  basicAuth: {
    username: getFileEnv('ME_CONFIG_BASICAUTH_USERNAME') || 'admin',
    password: getFileEnv('ME_CONFIG_BASICAUTH_PASSWORD') || 'pass'
  },

  options: {
    // Display startup text on console
    console: true,

    // documentsPerPage: how many documents you want to see at once in collection view
    documentsPerPage: 10,

    // editorTheme: Name of the theme you want to use for displaying documents
    // See http://codemirror.net/demo/theme.html for all examples
    editorTheme: process.env.ME_CONFIG_OPTIONS_EDITORTHEME || 'rubyblue',

    // The options below aren't being used yet

    // cmdType: the type of command line you want mongo express to run
    // values: eval, subprocess
    //   eval - uses db.eval. commands block, so only use this if you have to
    //   subprocess - spawns a mongo command line as a subprocess and pipes output to mongo express
    cmdType: 'eval',

    // subprocessTimeout: number of seconds of non-interaction before a subprocess is shut down
    subprocessTimeout: 300,

    // readOnly: if readOnly is true, components of writing are not visible.
    readOnly: getBoolean(process.env.ME_CONFIG_OPTIONS_READONLY, false),

    // persistEditMode: if set to true, remain on same page after clicked on Save button
    persistEditMode: getBoolean(process.env.ME_CONFIG_OPTIONS_PERSIST_EDIT_MODE, false),

    // collapsibleJSON: if set to true, jsons will be displayed collapsible
    collapsibleJSON: true,

    // collapsibleJSONDefaultUnfold: if collapsibleJSON is set to `true`, this defines default level
    //  to which JSONs are displayed unfolded use number or "all" to unfold all levels
    collapsibleJSONDefaultUnfold: 1,

    // gridFSEnabled: if gridFSEnabled is set to 'true', you will be able to manage uploaded files
    // ( ak. grids, gridFS )
    gridFSEnabled: getBoolean(process.env.ME_CONFIG_SITE_GRIDFS_ENABLED, false),

    // logger: this object will be used to initialize router logger (morgan)
    logger: {},

    // confirmDelete: if confirmDelete is set to 'true', a modal for confirming deletion is
    // displayed before deleting a document/collection
    confirmDelete: false,

    // noExport: if noExport is set to true, we won't show export buttons
    noExport: getBoolean(process.env.ME_CONFIG_OPTIONS_NO_EXPORT, false),

    // fullwidthLayout: if set to true an alternative page layout is used utilizing full window width
    fullwidthLayout: getBoolean(process.env.ME_CONFIG_OPTIONS_FULLWIDTH_LAYOUT, false),

    // noDelete: if noDelete is set to true, we won't show delete buttons
    noDelete: getBoolean(process.env.ME_CONFIG_OPTIONS_NO_DELETE, false)
  }
})

export type MongoDb = ReturnType<typeof getMongoDB> & {
  // ? TODO REMOVE (not used) connectionName: string | undefined
  whitelist: string[]
  blacklist: string[]
}
export type Config = ReturnType<typeof getConfigDefault> & {
  mongodb: MongoDb
}

export default getConfigDefault
// global.config = configDefault
