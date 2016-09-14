use verit;

create table IF NOT EXISTS credentials(
    id int primary key auto_increment,
    username char(100) not null,
    password char(20)  not null
);

create table IF NOT EXISTS personal_details (
    id int primary key auto_increment,
    name varchar(20),
    last_name varchar(30),
    acc_type varchar(30),
    acc_no int(13),
    physical_address varchar(100),
    user_id int,
    foreign key (user_id) references credentials(id)
);

create table IF NOT transactions (
    id int primary key auto_increment,
    shop_name varchar(30),
    amount decimal(10.2),
    transaction_date Date,
    user_id int,
    foreign key (user_id) references personal_details(id)
  );
