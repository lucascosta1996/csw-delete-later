// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Giacomo",
          startDate: '28-08-2010',
          role: " SE",
          platoon: "Alchemists"
        },
        {
          name: "Lucas",
          startDate: '20-08-2010',
          role: " SE",
          platoon: "Developers"
        },
      ]),
    )
  }),
]