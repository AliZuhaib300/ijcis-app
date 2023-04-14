function Pagination(
  recordsPerPage,
  totalNumberofRecord,
  currentPageNo,
  totalRecordGet,
) {
  const pageNumbers = [];
  let previousPaginationArrow = false;
  let nextPaginatinoArrow = false;
  let lastIndexOfData = 0;
  let firstIndexOfData = 0;
  for (let i = 1; i <= Math.ceil(totalNumberofRecord / recordsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (currentPageNo == 1 || totalRecordGet == 0) {
    previousPaginationArrow = true;
  }
  if (currentPageNo == pageNumbers.length || totalRecordGet == 0) {
    nextPaginatinoArrow = true;
  }
  if (currentPageNo == pageNumbers.length) {
    lastIndexOfData = totalNumberofRecord;
  }
  if (currentPageNo < pageNumbers.length) {
    lastIndexOfData = parseInt(recordsPerPage) * parseInt(currentPageNo);
  }
  if (totalRecordGet > 0) {
    firstIndexOfData = recordsPerPage * (currentPageNo - 1) + 1;
  }
  return {
    result: {
      recordsPerPage,
      totalNumberofRecord,
      pageNumbers,
      totalNumberOfPages: pageNumbers.length,
      currentPageNo,
      previousPaginationArrow,
      nextPaginatinoArrow,
      lastIndexOfData,
      firstIndexOfData,
    },
  };
}

export default Pagination;
