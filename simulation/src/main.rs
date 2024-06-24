use bevy::prelude::*;

fn main() {
  let window_plugin = WindowPlugin {
    primary_window: Some(Window {
      title: "Game".to_string(),
      canvas: Some("#simulation".to_string()),
      ..Default::default()
    }),
    ..Default::default()
  };

  let plugins = DefaultPlugins.set(window_plugin);

  App::new().add_plugins(plugins).run();
}
