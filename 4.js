// ��ȡ�ַ����г��ִ������ٵ��ַ�
function getRareChar(str) {
    let hash = {};
    // �������ַ����֡��״γ���λ�ü����ִ����浽hash��
    for(let i = 0, len = str.length; i < len; i++) {
        // ���hash[str[i]]�����ڣ��������г�ʼ��
        hash[str[i]] = hash[str[i]] || {index: i, count: 0};
        hash[str[i]].count++; // count��������
    }
    // ��Ϊ��ϣ�������򣬽���ת������
    return Object.keys(hash).map(function (key) {
        return Object.assign({char: key}, hash[key]);
        // ����count���Խ�����������
    }).sort(function (a, b) {
        return a.count - b.count;
        // ȡ��count��С��
    }).filter(function (e, i, arr) {
        return e.count === arr[0].count;
        // ��countֵ��С�ļ��������ٸ���index���Խ�����������
    }).sort(function (a, b) {
        return a.index - b.index;
    })[0].char;
}
// ��������
var str = 'cbaacfdeaebbv';
console.log(getRareChar(str));
