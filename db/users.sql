SELECT * FROM 04_admin_tool_bd.users;

INSERT INTO 04_admin_tool_bd.users 
(name, email, lastLoginAt, blockedAt, deletedAt, createdAt, updatedAt)
VALUES 
("test_user", "test@email.com", NULL, NULL, NULL, CURDATE(), CURDATE()),
("test_user_2", "test_2@email.com", CURDATE(), NULL, NULL, CURDATE(), CURDATE()),
("test_user_3", "test_3@email.com", NULL, CURDATE(), NULL, CURDATE(), CURDATE()),
("test_user_4", "test_4@email.com", CURDATE(), CURDATE(), NULL, CURDATE(), CURDATE())

-- DELETE FROM 04_admin_tool_bd.users WHERE id = 4

-- DROP TABLE 04_admin_tool_bd.users