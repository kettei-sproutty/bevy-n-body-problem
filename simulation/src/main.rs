mod render_body_plugin;

use bevy::prelude::*;
use render_body_plugin::RenderBodiesPlugin;

fn main() {
  #[cfg(not(target_arch = "wasm32"))]
  let window = Window {
    title: "Simulation".to_string(),
    ..Default::default()
  };

  #[cfg(target_arch = "wasm32")]
  let window = Window {
    title: "Simulation".to_string(),
    canvas: Some("#simulation".to_string()),
    ..Default::default()
  };

  let window_plugin = WindowPlugin {
    primary_window: Some(window),
    ..Default::default()
  };

  let plugins = DefaultPlugins.set(window_plugin);

  App::new()
    .add_plugins(plugins)
    .add_plugins(RenderBodiesPlugin)
    .run();
}
