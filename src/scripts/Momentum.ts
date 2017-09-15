export default class Momentum {
    private static calculate(m: number, w: number, n: number, x: number) {
        if (w > x) {
            var y = ((2 * n * x) + w * (m - n)) / (m + n);
            var z = w - x + y;
            return [y, z];
        } else {
            return [w, x];
        }
    }

    static multiBody(objects: {
        m: number;
        v: number
    }[]) {
        var odd = true;
        for (var row = 0, length = objects.length; row < length; row++) {
            if (odd) {
                for (var index = 0; index < Math.floor(length / 2); index++) {
                    let a = objects[index * 2];
                    let b = objects[index * 2 + 1];
                    let result = Momentum.calculate(a.m, a.v, b.m, b.v);
                    a.v = result[0];
                    b.v = result[1];
                }
            } else {
                for (var index = 1; index < Math.floor(length) / 2; index++) {
                    let a = objects[index * 2 - 1];
                    let b = objects[index * 2];
                    let result = Momentum.calculate(a.m, a.v, b.m, b.v);
                    a.v = result[0];
                    b.v = result[1];
                }
            }
            odd = !odd;
        }
        return objects;
    }
}