mod body;
mod camera;
mod constants;

use bevy::prelude::*;
use bevy_editor_pls::prelude::*;
use bevy_rapier2d::prelude::*;
use body::BodyPlugin;

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
    .add_systems(Startup, camera::setup)
    .add_plugins(EditorPlugin::default())
    .add_plugins(RapierPhysicsPlugin::<NoUserData>::pixels_per_meter(100.0))
    .add_plugins(BodyPlugin)
    .run();
}
