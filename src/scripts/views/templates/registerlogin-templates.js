// Template function for register and login forms
const createRegisterLoginTemplate = () => `
  <div class="wrapper">
    <div class="form-wrapper sign-up">
      <form action="">
        <h2>Sign Up</h2>
        <div class="input-group">
          <input type="text" required />
          <label for="">Username</label>
        </div>
        <div class="input-group">
          <input type="email" required />
          <label for="">Email</label>
        </div>
        <div class="input-group">
          <input type="password" required />
          <label for="">Password</label>
        </div>
        <button type="submit" class="btn-login">Sign Up</button>
        <div class="sign-link">
          <p>
            Already have an account?
            <a href="#" class="signIn-link">Sign In</a>
          </p>
        </div>
      </form>
    </div>

    <div class="form-wrapper sign-in">
      <form action="">
        <h2>Login</h2>
        <div class="input-group">
          <input type="text" required />
          <label for="">Username</label>
        </div>
        <div class="input-group">
          <input type="password" required />
          <label for="">Password</label>
        </div>
        <div class="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" class="btn-login">Login</button>
        <div class="sign-link">
          <p>
            Don't have an account? <a href="#" class="signUp-link">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  </div>
`;

// Export the template function
export { createRegisterLoginTemplate };

// Function to add event listeners for form toggle
const addFormToggleEventListeners = () => {
  const wrapper = document.querySelector('.wrapper');
  const signUpLink = document.querySelector('.signUp-link');
  const signInLink = document.querySelector('.signIn-link');

  if (signUpLink && signInLink && wrapper) {
    signUpLink.addEventListener('click', (event) => {
      event.preventDefault();
      wrapper.classList.add('animate-signIn');
      wrapper.classList.remove('animate-signUp');
    });

    signInLink.addEventListener('click', (event) => {
      event.preventDefault();
      wrapper.classList.add('animate-signUp');
      wrapper.classList.remove('animate-signIn');
    });
  } else {
    console.error('Required elements not found in the DOM.');
  }
};

// Export the function to add event listeners
export { addFormToggleEventListeners };