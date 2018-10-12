export class User {
    id: number;
    username: string;
    profilePic: string;
    email: string;
    password: string;
    phone_number: string;
}


     // .createTable("users", (table) => {
        //     table.increments();
        //     table.string("username").notNullable();
        //     table.string("profilePic").notNullable().defaultTo("https://s3.us-east-2.amazonaws.com/ig-clone2019/profilePic/profileplaceholder.png");
        //     table.string("email").notNullable();
        //     table.text("password").notNullable();
        //     table.text("phone_number").notNullable();
        //     table.timestamp('date_joined').defaultTo(knex.fn.now());
        // })