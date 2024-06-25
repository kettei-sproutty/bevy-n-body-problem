use bevy::{prelude::*, sprite::*};

#[derive(Component)]
pub struct Body;

#[derive(Component)]
pub struct Mass(i32);

#[derive(Component)]
pub struct Speed(f32);

pub struct RenderBodiesPlugin;

impl Plugin for RenderBodiesPlugin {
  fn build(&self, app: &mut App) {
    app
      .add_systems(Startup, setup)
      .add_systems(Startup, add_bodies)
      .add_systems(Update, attract_bodies);
  }
}

fn setup(mut commands: Commands) {
  commands.spawn(Camera2dBundle::default());
}

fn add_bodies(
  mut commands: Commands,
  mut meshes: ResMut<Assets<Mesh>>,
  mut materials: ResMut<Assets<ColorMaterial>>,
) {
  let shapes = [
    Mesh2dHandle(meshes.add(Circle { radius: 50.0 })),
    Mesh2dHandle(meshes.add(Circle { radius: 50.0 })),
    Mesh2dHandle(meshes.add(Circle { radius: 50.0 })),
  ];

  let color = Color::hsl(200., 0.95, 0.7);

  for (index, shape) in shapes.into_iter().enumerate() {
    commands.spawn((
      Body,
      Mass(10),
      Speed(10.0),
      MaterialMesh2dBundle {
        mesh: shape,
        material: materials.add(color),
        transform: Transform::from_xyz(100.0 * index as f32 - 100.0, 0.0, 0.0),
        ..default()
      },
    ));
  }
}

// TODO: Correct formula
fn attract_bodies(time: Res<Time>, mut query: Query<(&mut Transform, &Speed, &Mass), With<Body>>) {
  for (mut transform, speed, mass) in query.iter_mut() {
    transform.translation.x -= 10.0 * time.delta_seconds() * speed.0;
    transform.translation.y -= 10.0 * time.delta_seconds() * speed.0;
    dbg!(mass.0);
  }
}
