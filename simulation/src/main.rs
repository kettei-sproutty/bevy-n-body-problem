use bevy::diagnostic::FrameTimeDiagnosticsPlugin;
use bevy::prelude::*;
use iyes_perf_ui::prelude::*;

fn main() {
  #[cfg(target_arch = "wasm32")]
  let window_plugin = WindowPlugin {
    primary_window: Some(Window {
      title: "Simulation".to_string(),
      canvas: Some("#simulation".to_string()),
      ..Default::default()
    }),
    ..Default::default()
  };

  #[cfg(not(target_arch = "wasm32"))]
  let window_plugin = WindowPlugin {
    primary_window: Some(Window {
      title: "Simulation".to_string(),
      ..Default::default()
    }),
    ..Default::default()
  };

  let plugins = DefaultPlugins.set(window_plugin);

  App::new()
    .add_plugins(plugins)
    .add_plugins(FrameTimeDiagnosticsPlugin)
    .add_plugins(PerfUiPlugin)
    .add_systems(Startup, setup)
    .run();
}

fn setup(mut commands: Commands) {
  commands.spawn(Camera2dBundle::default());

  commands.spawn((
    PerfUiRoot {
      display_labels: false,
      layout_horizontal: true,
      ..default()
    },
    PerfUiEntryFPSWorst::default(),
    PerfUiEntryFPS::default(),
  ));
}
