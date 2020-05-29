## V.1.3.2 SymDocument table

Each row of a _SymDocument_ describes a source document, as shown below. The document can either be referred to indirectly (by its URL) or incorporated directly into the CILDB file as part of the _SymMisc_ heap. The GUID values referred to in this subclause are not defined by this Standard; space is simply reserved for them.

 | Offset | Size | Field | Description
 | ---- | ---- | ---- | ----
 | 0 | 16 | **Language** | GUID for the language.
 | 16 | 16 | **LanguageVendor** | GUID for the language vendor.
 | 32 | 16 | **DocumentType** | GUID for the document type.
 | 48 | 16 | **AlgorithmId** | GUID of the checksum algorithm; or 0 if there is no checksum.
 | 64 | 4 | **CheckSumSize** | Size of the checksum; or 0 if there is no checksum.
 | 68 | 4 | **CheckSumEntry** | Index of the checksum in the _SymMisc_ heap; or 0 if there is no checksum.
 | 72 | 4 | **SourceSize** | Size of the source in the _SymMisc_ heap; or 0 if the source document is not directly incorporated into the file.
 | 76 | 4 | **SourceEntry** | Index of the source in the _SymMisc_ heap; or 0 if the source document is not directly incorporated into the file.
 | 80 | 4 | **UrlEntry** | Index of the document URL in the _SymString_ heap.
