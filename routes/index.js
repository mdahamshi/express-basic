import homeRoutes from './home.js';
import aboutRoutes from './about.js';

export default function registerRoutes(app) {
  app.use('/', homeRoutes); // Handles "/"
  app.use('/', aboutRoutes); // Handles "/about"
}
