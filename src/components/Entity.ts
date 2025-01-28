export type EntityType = "rock" | "scissors" | "paper";

export class Entity {
  type: EntityType;
  isCollided: boolean;

  constructor(type: EntityType, isCollided: boolean = false) {
    this.type = type;
    this.isCollided = isCollided;
  }

  handleCollision(other: Entity) {
    if (this.isCollided || other.isCollided) return;

    const outcome = this.getBattleOutcome(this.type, other.type);

    if (outcome === "win") {
      other.type = this.type;
      other.isCollided = true;
    } else if (outcome === "lose") {
      this.type = other.type;
      this.isCollided = true;
    }
  }

  private getBattleOutcome(
    typeA: EntityType,
    typeB: EntityType
  ): "win" | "lose" | "draw" {
    if (typeA === typeB) return "draw";
    if (
      (typeA === "rock" && typeB === "scissors") ||
      (typeA === "scissors" && typeB === "paper") ||
      (typeA === "paper" && typeB === "rock")
    ) {
      return "win";
    }
    return "lose";
  }
}
