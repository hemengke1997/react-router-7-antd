import { flexible } from 'modern-flexible'

flexible({
  rootValue: 16,
  distinctDevice: [
    { deviceWidthRange: [375, 375], UIWidth: 375, isDevice: (w) => w <= 767 },
    {
      deviceWidthRange: [1920, 2560],
      UIWidth: 1920,
      isDevice: (w) => w > 767,
    },
  ],
})
