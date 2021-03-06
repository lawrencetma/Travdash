Package.describe({
  name: "travdash:trips",
  summary: "",
  version: "0.0.1",
  git: ""
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'nova:core@0.27.5-nova',
    'nova:users@0.27.5-nova',
    'travdash:users',
    'utilities:react-list-container@0.1.10'
  ]);

  api.use([
    'nova:notifications@0.27.5-nova',
    'nova:email@0.27.5-nova'
  ], ['client', 'server'], {weak: true});

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

});
