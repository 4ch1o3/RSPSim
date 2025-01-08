import styled from "styled-components";

export const BattleField = styled.div`
  display: flex;
  color: var(--primary);

  border-radius: 20px;
  border: 4px solid;

  min-width: 480px;
  width: 100%;
  height: 100%;
  min-height: 712px;
`;

type EntityType = "rock" | "scissors" | "paper";

class Entity {
  type: EntityType;
  isCollided: boolean;

  constructor(type: EntityType, isCollided: boolean) {
    this.type = type;
    this.isCollided = isCollided;
  }
}

const entities: Entity[] = [];

// TODO: add function to make entities array
