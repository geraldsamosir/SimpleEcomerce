
exports.up = function(knex, Promise) {
   return knex.schema
        .createTable('Categoryproduct', function(table) {
            table.increments('id').primary();
            table.integer('users').unsigned();
            table.integer('parent').unsigned();
            table.string("name").notNullable()
            table.timestamps();

            table.foreign('users')
                .references('users.id')
                .onDelete('cascade')
                .onUpdate('cascade');
            
            table.foreign("parent")
                .references('Categoryproduct.id')
                .onDelete('cascade')
                .onUpdate('cascade');

        });
};

exports.down = function(knex, Promise) {
     return knex.schema
        .dropTable('Categoryproduct')
};
