// h函数，返回javascript对象
const h = (tag, props, children) => {
    return {
        tag,
        props,
        children
    }
}

// Mount函数，挂载VNode
const mount = (vnode, container) => {
    // 1.创建出真实的元素，并在vnode上保留el，方便patch时候使用
    const el = vnode.el = document.createElement(vnode.tag)

    // 2.处理props
    if (vnode.props) {
        for (const key in vnode.props) {
            const value = vnode.props[key]
            if (key.startsWith('on')) {
                el.addEventListener(key.slice(2).toLowerCase(), value)
            } else {
                el.setAttribute(key, value)
            }
        }
    }

    // 3.处理children
    if (vnode.children) {
        if (typeof vnode.children === 'string') {
            el.textContent = vnode.children
        } else {
            vnode.children.forEach(item => {
                mount(item, el)
            });
        }
    }

    // 4.挂载到dom上
    container.appendChild(el)
}

// patch函数，新旧vnode对比
const patch = (n1, n2) => {
    // 1.对比tag元素
    if (n2.tag !== n1.tag) {
        const n1ElParent = n1.el.parentElement
        n1ElParent.removeChild(n1.el)
        mount(n2, n1ElParent)
    } else {
        const el = n2.el = n1.el

        // 2.对比props
        const newProps = n2.props || {}
        const oldProps = n1.props || {}

        // 添加新props属性
        for (const key in newProps) {
            const newValue = newProps[key]
            const oldValue = oldProps[key]
            if (newValue !== oldValue) {
                el.setAttribute(key, newValue)
            }
        }
        // 删除旧props属性
        for (const key in oldProps) {
            if (!(key in newProps)) {
                el.removeAttribute(key)
            }
        }

        // 3.对比children
        const newChildren = n2.children || []
        const oldChildren = n1.children || []

        if (typeof newChildren === 'string') {
            if (typeof oldChildren === 'string') { // 情况一：newChildren，oldChildren是一个string
                if (newChildren !== oldChildren) {
                    el.textContent = newChildren
                }
            } else { // 情况二：newChildren是一个string，oldChildren是一个数组
                el.innerHTML = newChildren
            }
        } else {
            if (typeof oldChildren === 'string') { // 情况二：newChildren是一个数组，oldChildren是一个字符串
                el.innerHTML = ''
                newChildren.forEach(item => {
                    mount(item, el)
                })
            } else { // 情况四： oldChildren、newChildren是一个数组，diff算法，考虑有key，无key。这里只做了无key的diff算法
                const commonLength = Math.min(oldChildren.length, newChildren.length)
                // 1.有相同节点数进行patch操作
                for (let i = 0; i < commonLength; i++) {
                    patch(oldChildren[i], newChildren[i])
                }

                // 2.oldChildren.length > newChildren.length 移除
                if (oldChildren.length > newChildren.length) {
                    oldChildren.slice(newChildren.length).forEach(item => {
                        el.removeChild(item.el)
                    })
                }

                // 3.oldChildren.length < newChildren.length 新增
                if (oldChildren.length < newChildren.length) {
                    newChildren.slice(oldChildren.length).forEach(item => {
                        mount(item, el)
                    })
                }
            }
        }
    }
}