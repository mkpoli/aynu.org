import { readFileSync } from 'node:fs';
import { strict as assert } from 'node:assert';
import { test } from 'node:test';

const asset = (name) => readFileSync(new URL(`../static/${name}`, import.meta.url), 'utf8');

test('sitemap contains the canonical homepage in a nonempty XML urlset', () => {
	const xml = asset('sitemap.xml');
	assert.equal(
		xml.replace(/>\s+</g, '><').trim(),
		'<?xml version="1.0" encoding="UTF-8"?>' +
			'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
			'<url><loc>https://aynu.org/</loc></url></urlset>'
	);
	assert.ok(Buffer.byteLength(xml, 'utf8') < 50 * 1024 * 1024);
});

test('robots allows the homepage and declares the public sitemap', () => {
	const robots = asset('robots.txt');
	assert.match(robots, /^User-agent: \*$/m);
	assert.match(robots, /^Allow: \/$/m);
	assert.match(robots, /^Sitemap: https:\/\/aynu\.org\/sitemap\.xml$/m);
	assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/m);
});
