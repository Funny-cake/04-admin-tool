SELECT * FROM 04_admin_tool_bd.users;

INSERT INTO 04_admin_tool_bd.users 
(name, email, lastLoginAt, blockedAt, deletedAt, createdAt, updatedAt)
VALUES ("test_user_2", "test_2@email.com", NULL, NULL, NULL, CURDATE(), CURDATE())

-- DROP TABLE 04_admin_tool_bd.users