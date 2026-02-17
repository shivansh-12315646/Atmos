# Contributing to Atmos

First off, thank you for considering contributing to Atmos! It's people like you who make Atmos a great tool for climate-conscious individuals and organizations.

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Examples of behavior that contributes to creating a positive environment include:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Examples of unacceptable behavior include:**
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

**Bug Report Template:**
```
**Description:**
A clear and concise description of the bug.

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior:**
What you expected to happen.

**Actual Behavior:**
What actually happened.

**Screenshots:**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 10, macOS 12.0, Ubuntu 22.04]
- Browser: [e.g., Chrome 98, Firefox 97]
- Version: [e.g., 1.0.0]
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

**Enhancement Template:**
```
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like:**
A clear description of what you want to happen.

**Describe alternatives you've considered:**
Any alternative solutions or features you've considered.

**Additional context:**
Any other context or screenshots about the feature request.

**Ethical Check:**
Does this feature align with our ethical guidelines? (See docs/ETHICS.md)
```

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Ensure the test suite passes**
6. **Make sure your code lints**
7. **Create the pull request**

**Pull Request Template:**
```
**Description:**
What does this PR do?

**Related Issue:**
Fixes #(issue number)

**Type of Change:**
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

**Checklist:**
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing tests pass locally
- [ ] This change aligns with ethical guidelines (docs/ETHICS.md)
```

## Development Workflow

### Setting Up Your Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Atmos.git
cd Atmos

# Add upstream remote
git remote add upstream https://github.com/shivansh-12315646/Atmos.git

# Install dependencies
cd backend && npm install
cd ../frontend && npm install
cd ../ml-services && pip install -r requirements.txt
```

### Branch Naming Convention

- Feature: `feature/description` (e.g., `feature/add-map-visualization`)
- Bug fix: `fix/description` (e.g., `fix/emission-calculation-error`)
- Documentation: `docs/description` (e.g., `docs/update-api-docs`)
- Refactor: `refactor/description` (e.g., `refactor/optimize-database-queries`)

### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(backend): add emission calculation for air travel
fix(frontend): correct chart rendering on mobile devices
docs(api): update authentication endpoint documentation
```

## Coding Standards

### JavaScript/Node.js (Backend & Frontend)

- Use **ES6+** syntax
- Follow **Airbnb JavaScript Style Guide**
- Use **meaningful variable names**
- Add **JSDoc comments** for functions
- Keep functions **small and focused**
- Use **async/await** over callbacks

**Example:**
```javascript
/**
 * Calculate CO2 emissions for a given activity
 * @param {string} activityType - Type of activity
 * @param {number} quantity - Quantity of activity
 * @param {string} unit - Unit of measurement
 * @returns {Promise<number>} Calculated CO2 emissions in kg
 */
async function calculateEmissions(activityType, quantity, unit) {
  const emissionFactor = await getEmissionFactor(activityType, unit);
  return quantity * emissionFactor;
}
```

### Python (ML Services)

- Follow **PEP 8** style guide
- Use **type hints**
- Add **docstrings** to functions and classes
- Use **meaningful variable names**
- Keep functions **pure when possible**

**Example:**
```python
def cluster_users(user_features: np.ndarray, n_clusters: int = 5) -> np.ndarray:
    """
    Cluster users based on their emission behavior patterns.
    
    Args:
        user_features: Array of user behavior features
        n_clusters: Number of clusters to create
    
    Returns:
        Array of cluster assignments
    """
    from sklearn.cluster import KMeans
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    return kmeans.fit_predict(user_features)
```

### React/Next.js (Frontend)

- Use **functional components** with hooks
- Follow **component composition** patterns
- Use **TypeScript** for type safety (if applicable)
- Keep components **small and reusable**
- Use **CSS Modules** or **Tailwind CSS**

**Example:**
```jsx
import React from 'react';
import styles from './EmissionCard.module.css';

/**
 * Displays emission data for a specific category
 */
function EmissionCard({ category, emission, percentage }) {
  return (
    <div className={styles.card}>
      <h3>{category}</h3>
      <p className={styles.emission}>{emission} kg CO₂</p>
      <p className={styles.percentage}>{percentage}%</p>
    </div>
  );
}

export default EmissionCard;
```

## Testing

### Running Tests

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

# ML service tests
cd ml-services && pytest
```

### Writing Tests

- Write **unit tests** for individual functions
- Write **integration tests** for API endpoints
- Write **component tests** for React components
- Aim for **>80% code coverage**

**Example (Jest):**
```javascript
describe('calculateEmissions', () => {
  it('should calculate emissions correctly for petrol car', async () => {
    const result = await calculateEmissions('car_petrol', 50, 'km');
    expect(result).toBeCloseTo(11.55, 2);
  });

  it('should throw error for invalid activity type', async () => {
    await expect(
      calculateEmissions('invalid_type', 50, 'km')
    ).rejects.toThrow('Invalid activity type');
  });
});
```

## Documentation

### When to Update Documentation

- Adding new features
- Changing API endpoints
- Modifying database schema
- Updating emission factors or calculations
- Changing ethical guidelines

### Documentation Files

- `docs/PRD.md` - Product requirements
- `docs/ARCHITECTURE.md` - System architecture
- `docs/API.md` - API documentation
- `docs/ETHICS.md` - Ethical guidelines
- `README.md` - Project overview

## Ethical Guidelines for Contributors

Before contributing, please read `docs/ETHICS.md`. All contributions must:

1. **Be honest** about capabilities and limitations
2. **Respect user privacy** and autonomy
3. **Avoid surveillance** or passive tracking features
4. **Not shame or judge** users
5. **Use verifiable data sources** (IPCC, GHG Protocol, etc.)
6. **Be explainable** (no black-box ML)
7. **Be defensible** in interviews/audits

**Ask yourself:**
- Can two students realistically build/maintain this?
- Is the data source real and public?
- Are we honest about limitations?
- Can we defend this in an interview?

If any answer is NO → Reconsider the contribution.

## Issue Labels

We use labels to organize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested
- `wontfix` - This will not be worked on
- `ethical-review` - Needs ethical review

## Recognition

Contributors will be recognized in:
- `README.md` contributors section
- Release notes
- Project website (future)

## Questions?

Feel free to:
- Open an issue with the `question` label
- Email: contribute@atmos.app
- Join our discussions (GitHub Discussions)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping make Atmos better!** 🌍💚
