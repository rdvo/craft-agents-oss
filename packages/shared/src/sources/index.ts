/**
 * Sources Module
 *
 * Public exports for source management.
 */

// Types
export type {
  SourceType,
  SourceMcpAuthType,
  ApiAuthType,
  KnownProvider,
  ApiOAuthProvider,
  McpSourceConfig,
  ApiSourceConfig,
  LocalSourceConfig,
  SourceConnectionStatus,
  FolderSourceConfig,
  SourceGuide,
  LoadedSource,
  CreateSourceInput,
} from './types.ts';

// Constants and helpers
export {
  API_OAUTH_PROVIDERS,
  isApiOAuthProvider,
} from './types.ts';

// Storage functions
export {
  // Directory utilities
  ensureSourcesDir,
  getSourcePath,
  // Global source directory utilities
  getGlobalSourcesDir,
  ensureGlobalSourcesDir,
  getGlobalSourcePath,
  // Config operations
  loadSourceConfig,
  saveSourceConfig,
  markSourceAuthenticated,
  // Global config operations
  loadGlobalSourceConfig,
  saveGlobalSourceConfig,
  markGlobalSourceAuthenticated,
  isGlobalSource,
  loadSourceConfigFromAnyLocation,
  saveSourceConfigToLocation,
  getSourcePathFromAnyLocation,
  // Guide operations
  loadSourceGuide,
  saveSourceGuide,
  loadGlobalSourceGuide,
  saveGlobalSourceGuide,
  // Icon operations
  findSourceIcon,
  downloadSourceIcon,
  sourceNeedsIconDownload,
  isIconUrl,
  findGlobalSourceIcon,
  downloadGlobalSourceIcon,
  // Load operations
  loadSource,
  loadGlobalSource,
  loadGlobalSources,
  loadWorkspaceSources,
  loadAllSources,
  getEnabledSources,
  getSourcesBySlugs,
  // Create/Delete operations
  generateSourceSlug,
  createSource,
  deleteSource,
  sourceExists,
  // Move/Toggle operations
  moveSourceToGlobal,
  moveSourceToWorkspace,
  // Parsing utilities
  parseGuideMarkdown,
} from './storage.ts';

// Credential Manager (unified credential operations)
export {
  SourceCredentialManager,
  getSourceCredentialManager,
  getSourcesNeedingAuth,
} from './credential-manager.ts';
export type {
  AuthResult,
  ApiCredential,
  BasicAuthCredential,
} from './credential-manager.ts';

// Server Builder (builds MCP/API servers from sources)
export {
  SourceServerBuilder,
  getSourceServerBuilder,
  normalizeMcpUrl,
  SERVER_BUILD_ERRORS,
} from './server-builder.ts';
export type {
  McpServerConfig,
  SourceWithCredential,
  BuiltServers,
} from './server-builder.ts';

// Built-in Sources (always available in every workspace)
export {
  getDocsSource,
  getBuiltinSources,
  isBuiltinSource,
} from './builtin-sources.ts';
