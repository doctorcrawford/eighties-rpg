export class DanceMove{
  constructor(name, effectiveness, damage) {
    this.name = name;
    this.baseEffectiveness = effectiveness;
    this.baseDamage = damage;
    this.battleEffectiveness = 0;
    this.battleDamage = 0;
  }
}