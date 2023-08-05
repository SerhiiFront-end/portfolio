'use client'
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer'

export default function CV() {
	return (
		<DocViewer
			theme={{
				primary: '#CCC',
				tertiary: '#111827',
				text_secondary: '#111827',
				text_tertiary: '#111827',
				disableThemeScrollbar: false,
			}}
			pluginRenderers={DocViewerRenderers}
			documents={[{ uri: '/CV_Serhii_Kozin_UI_UX_dev.pdf' }]}
			config={{
				header: {
					disableHeader: true,
					disableFileName: true,
					retainURLParams: true,
				},
			}}
		/>
	)
}
