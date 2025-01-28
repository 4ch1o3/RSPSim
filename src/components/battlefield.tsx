import styled from "styled-components";
import { Entity, EntityType } from "./Entity";
import { useState, useRef, useEffect } from "react";
import React from "react";

export const BattleFieldContainer = styled.div`
  display: flex;
  color: var(--primary);

  border-radius: 20px;
  border: 4px solid;

  min-width: 480px;
  width: 100%;
  height: 100%;
  min-height: 712px;
`;

const EmojiEntity = styled.div`
  position: absolute;
  font-size: 32px;
  transform: translate(-50%, -50%);
  user-select: none;
`;

const entityEmojis: Record<EntityType, string> = {
  rock: "🪨",
  scissors: "✂️",
  paper: "📃",
};

interface BattleFieldProps {
  entities: Entity[];
  onSimulationEnd: (entities: Entity[]) => void;
}

export function BattleField({ entities, onSimulationEnd }: BattleFieldProps) {
  const [positions, setPositions] = useState(
    entities.map(() => ({
      x: Math.random() * 560 + 20,
      y: Math.random() * 560 + 20,
    }))
  );
  const battlefieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (entities.length > 1) {
      interval = setInterval(() => {
        setPositions((prevPositions) =>
          prevPositions.map((pos, index) => {
            const dx = Math.random() * 20 - 10;
            const dy = Math.random() * 20 - 10;

            const newPos = {
              x: Math.min(Math.max(pos.x + dx, 0), 580),
              y: Math.min(Math.max(pos.y + dy, 0), 580),
            };

            for (let i = 0; i < entities.length; i++) {
              if (i !== index && checkCollision(newPos, prevPositions[i])) {
                entities[index].handleCollision(entities[i]);
              }
            }

            return newPos;
          })
        );

        const uniqueTypes = new Set(entities.map((e) => e.type));
        if (uniqueTypes.size === 1) {
          clearInterval(interval);
          onSimulationEnd(entities);
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [entities, onSimulationEnd]);

  const checkCollision = (
    posA: { x: number; y: number },
    posB: { x: number; y: number }
  ) => {
    const distance = Math.sqrt((posA.x - posB.x) ** 2 + (posA.y - posB.y) ** 2);
    return distance < 32;
  };

  return (
    <BattleFieldContainer ref={battlefieldRef}>
      {entities.map((entity, index) => (
        <EmojiEntity
          key={index}
          style={{
            left: `${positions[index].x}px`,
            top: `${positions[index].y}px`,
          }}
        >
          {entityEmojis[entity.type]}
        </EmojiEntity>
      ))}
    </BattleFieldContainer>
  );
}
