export const config = {
  "global": {
    "files": "/temp-abap2xlsx-input/*.*",
    "skipGeneratedGatewayClasses": true,
    "skipGeneratedPersistentClasses": true,
    "skipGeneratedFunctionGroups": true,
    "useApackDependencies": false
  },
  "dependencies": [
    {
      "url": "https://github.com/abaplint/deps",
      "folder": "/deps",
      "files": "/src/**/*.*"
    }
  ],
  "rename": {
    "output": "temp-abap2xlsx-input",
    "patterns": []
  },
  "syntax": {
    "version": "v702",
    "errorNamespace": "^(Z|Y)"
  },
  "rules": {
    "begin_end_names": true,
    "check_ddic": true,
    "check_include": true,
    "check_syntax": true,
    "global_class": true,
    "implement_methods": true,
    "method_implemented_twice": true,
    "parser_error": true,
    "parser_missing_space": true,
    "superclass_final": false,
    "unknown_types": true,
    "xml_consistency": true
  }
}