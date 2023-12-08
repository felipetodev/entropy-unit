export const titleAnim = {
  hidden: {
    transition: {
      staggerChildren: 0.006
    }
  },
  hover: {
    transition: {
      staggerChildren: 0.006
    }
  }
}

export const letterAnim = {
  hidden: {
    y: 0
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween'
    }
  }
}

export const secondLetterAnim = {
  hidden: {
    y: 30
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween'
    }
  }
}
