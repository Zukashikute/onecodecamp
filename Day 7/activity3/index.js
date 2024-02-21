/*
   Character
   Create a class called Character with the following attributes: name, health, stamina, and
   manna. Give the character the following three methods: walk(), run(), and showStats().
   Give a new character health, stamina, and manna of 100 when it gets created. When a
   walk method is invoked, have the stamina decrease by 1. When a run method is
   involved, have the stamina decrease by 3. When a showStats() method is invoked,
   display on the screen the name, health, stamina, and manna of the character. Create an
   instance of the character called 'character' and have this character walk three times, run
   twice, and have it display its stats.

   Shaman
   Now, create another class called Shaman that inherits everything that the Character
   does and has, but 1) have the default health be 150 and 2) add a new method called
   heal(), which when invoked, increases the health, stamina, and manna by 5. Have the
   Shaman walk three times, run twice, heal once, and have it display its stats.

   Swordsman
   Now, create another class called Swordsman that inherits everything that the Character
   has and does, with these two changes: 1) have the default health be 170 and 2) add a
   new method called slash(), which when invoked, decreases the manna by 10. Have the
   Swordsman walk three times, run twice, slash twice, and have it display its stats. When
   the Swordsman's showStats function is called have it say 'I am powerful!' before it
   displays the default information (make sure you still call the parent's showStats function).
   Now for the first instance of Character (instance called 'character '), try calling a method
   'heal' or 'slash' and make sure it doesn't work. :)
*/


class Character {
   constructor(name) {
      this.name = name;
      this.health = 100;
      this.stamina = 100;
      this.mana = 100;
   }

   walk(action) {
      return action > this.stamina ? "Not enough stamina" : this.stamina -= action
   }

   run(action) {
      let runAction = action * 3
      return runAction > this.stamina ? "Not enough stamina" : this.stamina -= runAction
   }

   showStats() {
      console.log(`Name: ${this.name}`)
      console.log(`Health: ${this.health}`)
      console.log(`Stamina: ${this.stamina}`)
      console.log(`Mana: ${this.mana}`)
   }
}

const character1 = new Character("Bristleback");

character1.walk(3)
character1.run(2)
character1.showStats()

class Shaman extends Character {
   constructor(name) {
      super(name)
      this.health += 50
   }

   heal(action) {
      let healAction = action * 5
      this.health += healAction;
      this.stamina += healAction;
      this.mana += healAction;

   }
}

const character2 = new Shaman("Shadow Shaman");
character2.walk(3);
character2.run(2);
character2.heal(1);
character2.showStats();

class Swordsman extends Character {
   constructor(name) {
      super(name);
      this.health += 70
   }

   slash(action) {
      let slashAction = action * 10
      return slashAction > this.mana ? "Not enough mana" : this.mana -= slashAction;
   }

   showStats() {
      console.log("I am powerful!");
      super.showStats()
   }
}

const character3 = new Swordsman("Juggernaut");
character3.walk(3);
character3.run(2);
character3.slash(2);
character3.showStats();

// character1.heal(1);
// character1.slash(1);