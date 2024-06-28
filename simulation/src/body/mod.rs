use bevy::prelude::*;
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

#[derive(Debug, Bundle)]
pub struct BodyBundle {
  pub collider: Collider,
  pub mass_properties: ColliderMassProperties,
  pub gravity_scale: GravityScale,
  pub transform: TransformBundle,
  pub velocity: Velocity,
}

fn setup(mut commands: Commands) {
  commands.spawn(BodyBundle {
    collider: Collider::ball(1.0),
    mass_properties: ColliderMassProperties::Density(1.0),
    gravity_scale: GravityScale(0.0),
    transform: TransformBundle::from(Transform::from_xyz(0.0, 0.0, 0.0)),
    velocity: Velocity {
      linvel: Vec2::new(0.0, 0.0),
      angvel: 0.0,
    },
  });
}
