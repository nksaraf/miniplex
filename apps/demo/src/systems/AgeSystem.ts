import { useFrame } from "@react-three/fiber"
import { ECS } from "../state"

export const AgeSystem = () => {
  useFrame((_, dt) => {
    for (const entity of ECS.world.archetype("lifetime")) {
      entity.lifetime.age += dt

      if (
        entity.lifetime.maxAge &&
        entity.lifetime.age >= entity.lifetime.maxAge
      ) {
        ECS.world.remove(entity)
      }
    }
  })

  return null
}