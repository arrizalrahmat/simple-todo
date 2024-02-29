const dayjs = require('dayjs');
const db = require('../config/db');

class TodoController {
  static async getTodos() {
    const query = `SELECT * FROM todos;`;
    const result = await db.query(query);

    return result.rows;
  }

  static async getTodo(id) {
    const query = `SELECT * FROM todos WHERE id = ${id};`;
    const result = await db.query(query);

    return result.rows;
  }

  static async createTodo(payload) {
    const { title, description } = payload;
    const query = `
    INSERT INTO todos (title, description, status, "createdAt", "deadline")
    VALUES ('${title}', '${description}', 'ongoing', '${dayjs(
      new Date()
    ).format('YYYY-MM-DD')}', '${dayjs(
      new Date().getDate() + 30
    ).format('YYYY-MM-DD')}');
    `;
    const result = await db.query(query);

    return { status: 'ok' };
  }
}

module.exports = TodoController;
