import { classNames } from '../classNames';

describe('classNames helper', () => {
  // Should return the base class name if no additional classes or modifiers are provided
  it('should return the base class name if no additional classes or modifiers are provided', () => {
    const result = classNames('base');
    expect(result).toBe('base');
  });

  // Should return the base class name if additional classes array is empty
  it('should return the base class name if additional classes array is empty', () => {
    const result = classNames('base', []);
    expect(result).toBe('base');
  });

  // Should return a space-separated string of class names including the base class and undefined additional classes
  it('should return a space-separated string of class names including the base class and undefined additional classes', () => {
    const result = classNames('base', [
      undefined,
      'extra1',
      undefined,
      'extra2',
    ]);
    expect(result).toBe('base extra1 extra2');
  });

  // Should return a space-separated string of class names including the base class and undefined modifiers
  it('should return a space-separated string of class names including the base class and undefined modifiers', () => {
    const result = classNames('base', ['extra'], {
      active: true,
      disabled: undefined,
    });
    expect(result).toBe('base extra active');
  });
});
