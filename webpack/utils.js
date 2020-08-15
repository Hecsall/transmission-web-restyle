
const glob = require('glob');
const path = require('path');


module.exports = {

    /*
     * Compose object with assets paths
     * @param {string} assetFolder - Name of the assets folder to target (es: 'js')
     * @returns {*} - Object containing `{ filename: filepath }`
     */
    compose: (assetFolder) => {
        const entries = `./static/src/${assetFolder}/**/*.*`;
        return glob.sync(path.resolve(entries))
            .filter((item) => {
                const extension = path.extname(item);
                const fileName = path.basename(item, extension);
                return fileName.indexOf('_') !== 0;
            })
            .reduce((prev, item) => {
                const extension = path.extname(item);
                const location = path.relative(path.join(process.cwd(), `./static/src/${assetFolder}`), path.resolve(item)).replace(extension, '');
                return Object.assign(prev, {
                    [location]: path.resolve(item),
                });
            }, {});
    },

    stats: () => ({
        hash: false,
        chunks: false,
        entrypoints: false,
        modules: false,
        colors: true,
    }),


};
