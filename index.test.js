let postcss = require('postcss');

let plugin = require('./');

async function run(input, output, opts) {
    let result = await postcss([plugin(opts)]).process(input, {
        from: undefined,
    });
    expect(result.css).toEqual(output);
    expect(result.warnings()).toHaveLength(0);
}

it('does something', async () => {
    await run('a{ --color: red; color: var(--color); }', 'a{ color: red; }', {});
});
