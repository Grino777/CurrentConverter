import BlockContent from '../blockContent/BlockContent'

import ThemeProvider from 'react-bootstrap/ThemeProvider'

const App = () => {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xs"
        >
            <BlockContent />
        </ThemeProvider>
    )
}

export default App
