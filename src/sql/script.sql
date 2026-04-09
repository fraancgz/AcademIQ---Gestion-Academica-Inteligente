
-- USERS
INSERT INTO "users" ("firstName", "lastName", "email", "password", "role", "active", "createdAt", "updatedAt") VALUES ('Francisco', 'Pérez', 'francisco@duoc.cl', '123456', 'teacher', true, NOW(), NOW());

-- PROFILES para USER ID 1
INSERT INTO "profiles" ("specialty", "bio", "maxWeeklyHours", "avatar", "userId", "createdAt", "updatedAt") VALUES ('Ingeniería en Informática', 'Especialista en desarrollo y running', 44, 'default.png', 1, NOW(), NOW());

-- COURSES para USER ID 1
INSERT INTO "courses" ("level", "letter", "userId") VALUES 
('1° Básico', 'A', 1),
('1° Básico', 'B', 1),
('7° Básico', 'A', 1),
('1° Medio', 'A', 1),
('1° Medio', 'B', 1),
('2° Medio', 'A', 1),
('3° Medio', 'C', 1),
('4° Medio', 'A', 1);

-- SUBJECTS --
INSERT INTO "subjects" ("name", "area") VALUES 
('Lenguaje y Comunicación', 'Humanista'),
('Matemática', 'Científica'),
('Ciencias Naturales', 'Científica'),
('Historia, Geografía y Ciencias Sociales', 'Humanista'),
('Inglés', 'Idiomas'),
('Educación Física y Salud', 'Deportiva'),
('Artes Visuales', 'Artística'),
('Música', 'Artística'),
('Tecnología', 'Técnica'),
('Filosofía', 'Humanista'),
('Orientación', 'Transversal');

