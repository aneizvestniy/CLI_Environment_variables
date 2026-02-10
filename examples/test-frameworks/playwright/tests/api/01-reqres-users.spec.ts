import { test, expect } from '@playwright/test';

test.describe('JSONPlaceholder API (API tests)', () => {
  test('GET /posts/1 returns a post', async ({ request, baseURL }) => {
    const res = await request.get(`${baseURL}/posts/1`);
    expect(res.ok()).toBeTruthy();

    const body = await res.json();
    expect(body.id).toBe(1);
    expect(body.userId).toBeTruthy();
    expect(body.title).toBeTruthy();
  });

  test('POST /posts creates post (demo)', async ({ request, baseURL }) => {
    const res = await request.post(`${baseURL}/posts`, {
      data: { title: 'foo', body: 'bar', userId: 1 },
    });
    expect(res.ok()).toBeTruthy();

    const body = await res.json();
    expect(body.title).toBe('foo');
    expect(body.body).toBe('bar');
    expect(body.userId).toBe(1);
    // JSONPlaceholder typically returns id=101
    expect(body.id).toBeTruthy();
  });
});
