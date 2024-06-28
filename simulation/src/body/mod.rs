use bevy::{
  prelude::*,
  sprite::{MaterialMesh2dBundle, Mesh2dHandle},
};
use bevy_rapier2d::prelude::*;

pub struct BodyPlugin;

impl Plugin for BodyPlugin {
  fn name(&self) -> &str {
    "BodyPlugin"
  }

  fn build(&self, app: &mut App) {
    app.add_systems(Startup, setup);
  }
}

#[derive(Bundle)]
pub struct BodyBundle {
  pub collider: Collider,
  pub mass_properties: ColliderMassProperties,
  pub gravity_scale: GravityScale,
  pub velocity: Velocity,
  pub mesh: MaterialMesh2dBundle<ColorMaterial>,
}

fn setup(
  mut commands: Commands,
  mut meshes: ResMut<Assets<Mesh>>,
  mut materials: ResMut<Assets<ColorMaterial>>,
) {
  commands.spawn(BodyBundle {
    collider: Collider::ball(1.0),
    mass_properties: ColliderMassProperties::Density(1.0),
    gravity_scale: GravityScale(0.0),
    velocity: Velocity {
      linvel: Vec2::new(0.0, 0.0),
      angvel: 0.0,
    },
    mesh: MaterialMesh2dBundle {
      material: materials.add(Color::RED),
      mesh: Mesh2dHandle(meshes.add(Circle { radius: 10.0 })),
      transform: Transform::from_xyz(100., 0., 0.),
      ..default()
    },
  });
}
