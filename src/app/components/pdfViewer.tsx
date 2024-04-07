import { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({path}: {path: string}) => {
	const [numPages, setNumPages] = useState<number>(0);
	const [pageNumber, setPageNumber] = useState<number>(1);

	const onDocumentLoadSuccess = ({ numPages }: {numPages: number}) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>{
        if(pageNumber>1){
            setPageNumber(pageNumber-1)
        }
    }

	const goToNextPage = () =>{
        if(pageNumber<numPages){
            setPageNumber(pageNumber+1)
        }
    }

	return (
		<div>
			<nav>
				<button onClick={goToPrevPage}>Prev</button>
				<button onClick={goToNextPage}>Next</button>
				<p>
					Page {pageNumber} of {numPages}
				</p>
			</nav>

			<Document
				file={path}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
			</Document>
		</div>
	);
};

export default PDFViewer;