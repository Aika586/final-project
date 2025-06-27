
const testUsers = [
  {
    username: 'standard_user',
    expected: 'Swag Labs',
    description: 'Standard user – should login successfully',
  },
  {
    username: 'locked_out_user',
    expected: 'Epic sadface: Sorry, this user has been locked out.',
    description: 'Locked out user – should see error message',
  },
  {
    username: 'problem_user',
    expected: 'Swag Labs',
    description: 'Problem user – should login, but may cause bugs',
  },
  {
    username: 'performance_glitch_user',
    expected: 'Swag Labs',
    description: 'Performance glitch user – slow load, but should login',
  },
  {
    username: 'error_user',
    expected: 'Swag Labs',
    description: 'Error user – used to test error-handling after login',
  },
  {
    username: 'visual_user',
    expected: 'Swag Labs',
    description: 'Visual user – UI bugs expected after login',
  }
];

module.exports=testUsers