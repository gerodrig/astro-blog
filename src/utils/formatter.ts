export class Formatter {
  static formatdate(value: Date): string {
    const date = new Date(value);

    return Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(date);
  }
}
