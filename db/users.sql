SELECT * FROM 04_admin_tool_bd.users;

INSERT INTO 04_admin_tool_bd.users 
(name, email, lastLoginAt, blockedAt, deletedAt, createdAt, updatedAt)
VALUES 
("test_user", "test@email.com", NULL, NULL, NULL, CURDATE(), CURDATE()),
("test_user_2", "test_2@email.com", NULL, CURDATE(), NULL, CURDATE(), CURDATE()),
("test_user_3", "test_3@email.com", NULL, NULL, CURDATE(), CURDATE(), CURDATE()),
("test_user_4", "test_4@email.com", NULL, CURDATE(), CURDATE(), CURDATE(), CURDATE())

UPDATE 04_admin_tool_bd.users SET deletedAt = NULL WHERE id = 11

-- DELETE FROM 04_admin_tool_bd.users WHERE id > 0

-- DROP TABLE 04_admin_tool_bd.users