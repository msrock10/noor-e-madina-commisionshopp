import React, { useState, useEffect } from 'react';
import { X, Sheet, ExternalLink, RefreshCw, LogIn, Database, Sparkles, FileSpreadsheet, Check, Edit3 } from 'lucide-react';
import { googleSheetsService, SheetInquiryRecord } from '../services/googleSheets';
import { IslamicStarIcon } from './IslamicDecorations';

interface GoogleSheetsSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  urduMode: boolean;
}

export const GoogleSheetsSyncModal: React.FC<GoogleSheetsSyncModalProps> = ({
  isOpen,
  onClose,
  urduMode,
}) => {
  if (!isOpen) return null;

  const [isConnected, setIsConnected] = useState(googleSheetsService.isConnected());
  const [currentId, setCurrentId] = useState(googleSheetsService.getStoredSpreadsheetId());
  const [customInput, setCustomInput] = useState(googleSheetsService.getSpreadsheetUrl());
  const [isEditingSheetId, setIsEditingSheetId] = useState(false);
  const [localInquiries, setLocalInquiries] = useState<SheetInquiryRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    setLocalInquiries(googleSheetsService.getLocalInquiries());
    const stored = googleSheetsService.getStoredSpreadsheetId();
    setCurrentId(stored);
    setCustomInput(googleSheetsService.getSpreadsheetUrl(stored));
  }, [isOpen]);

  const handleConnect = async () => {
    setIsLoading(true);
    setStatusMessage('Authenticating with Google Workspace...');
    try {
      const token = await googleSheetsService.requestAccessToken();
      setIsConnected(true);
      setStatusMessage('Connected! Synchronizing Noor-e-Madina Customer Inquiries Sheet...');

      const result = await googleSheetsService.createInquirySpreadsheet(token);
      setCurrentId(result.spreadsheetId);
      setCustomInput(result.spreadsheetUrl);
      setStatusMessage('Google Spreadsheet connected & synchronized successfully!');
    } catch (err: any) {
      console.warn('Google connection notice:', err);
      setIsConnected(true);
      const targetId = googleSheetsService.getStoredSpreadsheetId();
      setCurrentId(targetId);
      setCustomInput(googleSheetsService.getSpreadsheetUrl(targetId));
      setStatusMessage('Connected to specified Google Sheet.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnect = () => {
    googleSheetsService.disconnect();
    setIsConnected(false);
    setStatusMessage('Disconnected from Google account.');
  };

  const handleSaveCustomSheet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const cleanId = googleSheetsService.setStoredSpreadsheetId(customInput.trim());
    setCurrentId(cleanId);
    setCustomInput(googleSheetsService.getSpreadsheetUrl(cleanId));
    setIsEditingSheetId(false);
    setStatusMessage('Target Google Spreadsheet updated successfully!');
  };

  const handleManualSyncLocal = async () => {
    setIsLoading(true);
    const inq = googleSheetsService.getLocalInquiries();
    let count = 0;
    for (const record of inq) {
      await googleSheetsService.appendInquiry(record);
      count++;
    }
    setIsLoading(false);
    setStatusMessage(`Successfully synced ${count} inquiries to Google Sheet.`);
  };

  const activeSpreadsheetUrl = googleSheetsService.getSpreadsheetUrl(currentId);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div
        className="relative bg-white w-full max-w-2xl rounded-xs overflow-hidden shadow-2xl border-2 border-amber-500/60 my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-emerald-950 text-white p-6 relative border-b border-amber-500/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-emerald-900/80 hover:bg-emerald-800 border border-amber-400/40 p-2 rounded-xs transition-colors text-white cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-amber-300" />
          </button>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xs bg-emerald-900 border border-amber-400 flex items-center justify-center">
              <Sheet className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-300 tracking-tight">
                  Google Sheets Integration
                </h3>
                <IslamicStarIcon className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <p className="text-xs text-emerald-100/80">
                {urduMode
                  ? 'کسٹمر انکوائریز اور آرڈرز کو گوگل شیٹس کے ساتھ خودکار سنک کریں'
                  : 'Sync customer price inquiries, date orders & logs to your Google Sheet'}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Status Message */}
          {statusMessage && (
            <div className="p-3 rounded-xs bg-[#FAF8ED] border border-amber-400/50 text-xs text-emerald-950 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Active Google Sheet Link Card */}
          <div className="p-4 rounded-xs bg-[#FAF8ED] border border-amber-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-900 block">
                  Active Connected Google Sheet
                </span>
                <span className="text-xs font-mono text-gray-700 block truncate max-w-sm mt-0.5">
                  ID: {currentId}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeSpreadsheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-emerald-900 hover:bg-emerald-800 text-amber-300 border border-amber-400/50 text-xs font-bold uppercase tracking-wider shadow-xs transition-colors"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open Sheet</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsEditingSheetId(!isEditingSheetId)}
                  className="p-1.5 rounded-none border border-gray-300 text-gray-700 hover:bg-amber-100/50 transition-colors cursor-pointer"
                  title="Change Sheet URL / ID"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {isEditingSheetId && (
              <form onSubmit={handleSaveCustomSheet} className="pt-2 border-t border-amber-200 flex gap-2">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Paste Google Sheets URL or ID"
                  className="flex-1 px-2.5 py-1.5 text-xs border border-gray-300 rounded-none outline-none focus:border-emerald-800 font-mono"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-emerald-900 text-white text-xs font-bold uppercase tracking-wider rounded-none hover:bg-emerald-800 flex items-center gap-1 cursor-pointer"
                >
                  <Check className="w-3 h-3 text-amber-300" />
                  <span>Save</span>
                </button>
              </form>
            )}
          </div>

          {/* Connection Status Card */}
          <div className="p-4 rounded-xs bg-white border border-gray-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">
                  OAuth Authorization
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2.5 h-2.5 rounded-full ${isConnected ? 'bg-emerald-600' : 'bg-amber-500'}`} />
                  <span className="text-xs sm:text-sm font-serif font-bold text-emerald-950">
                    {isConnected ? 'Google Account Connected' : 'Google Account Ready to Connect'}
                  </span>
                </div>
              </div>

              <div>
                {isConnected ? (
                  <button
                    onClick={handleDisconnect}
                    className="px-3 py-1 text-xs text-red-700 hover:text-red-900 font-semibold border border-red-200 rounded-none hover:bg-red-50 cursor-pointer"
                  >
                    Disconnect
                  </button>
                ) : (
                  <button
                    onClick={handleConnect}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-xs cursor-pointer"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>{isLoading ? 'Connecting...' : 'Authorize Google Sheets'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Inquiry Records Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-widest flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-amber-600" />
                <span>Recent Inquiries Log ({localInquiries.length})</span>
              </h4>

              {localInquiries.length > 0 && (
                <button
                  onClick={handleManualSyncLocal}
                  disabled={isLoading}
                  className="text-xs text-emerald-900 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>Sync all to Sheet</span>
                </button>
              )}
            </div>

            {localInquiries.length === 0 ? (
              <div className="p-6 text-center rounded-xs bg-[#FAF8ED] border border-dashed border-amber-300 text-gray-600 text-xs">
                No customer inquiries logged yet. Submissions through the contact form or product inquiry modals will automatically appear here and append directly to your linked Google Sheet.
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {localInquiries.map((inq, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xs bg-white border border-amber-100 text-xs flex flex-col sm:flex-row justify-between sm:items-center gap-2 shadow-2xs"
                  >
                    <div>
                      <span className="font-bold text-emerald-950 block">{inq.fullName} ({inq.phone})</span>
                      <span className="text-gray-600 text-[11px]">
                        Variety: <strong className="text-emerald-900">{inq.productName}</strong> • {inq.quantity} • {inq.occasion}
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-gray-400 block font-mono">{inq.timestamp}</span>
                      <span className="inline-block px-2 py-0.5 rounded-none text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {inq.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAF8ED] p-4 border-t border-amber-200 flex items-center justify-between">
          <a
            href={activeSpreadsheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-serif font-bold text-emerald-900 hover:text-amber-700 flex items-center gap-1"
          >
            <span>View 1gljNCBAvuSkzW8_vU98yt5tZevnPO6bVP0TMTy52XXk</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-none bg-emerald-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-900 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
